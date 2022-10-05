/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.facebook.flipper.plugins.uidebugger.descriptors

import android.graphics.Bitmap
import com.facebook.flipper.plugins.uidebugger.common.InspectableObject
import com.facebook.flipper.plugins.uidebugger.model.Bounds

/**
 * A chained descriptor is a special type of descriptor that models the inheritance hierarchy in
 * native UI frameworks. With this setup you can define a descriptor for each class in the
 * inheritance chain and given that we record the super class's descriptor we can automatically
 * aggregate the results for each descriptor in the inheritance hierarchy in a chain.
 *
 * The result is that each descriptor in the inheritance chain only exports the attributes that it
 * knows about but we still get all the attributes from the parent classes
 */
abstract class ChainedDescriptor<T> : NodeDescriptor<T> {
  private var mSuper: ChainedDescriptor<T>? = null

  fun setSuper(superDescriptor: ChainedDescriptor<T>) {
    if (superDescriptor !== mSuper) {
      check(mSuper == null)
      mSuper = superDescriptor
    }
  }

  fun getSuper(): ChainedDescriptor<T>? {
    return mSuper
  }

  final override fun getActiveChild(node: T): Any? {
    // ask each descriptor in the chain for an active child, if none available look up the chain
    // until no more super descriptors
    return onGetActiveChild(node) ?: mSuper?.getActiveChild(node)
  }

  /**
   * The name used to identify this node in the inspector. Does not need to be unique. A good
   * default is to use the class name of the node.
   */
  final override fun getName(node: T): String {
    return onGetName(node)
  }

  final override fun getTags(node: T): Set<String> {
    val tags = onGetTags(node) ?: mSuper?.getTags(node)
    return tags ?: setOf()
  }

  open fun onGetTags(node: T): Set<String>? = null

  open fun onGetActiveChild(node: T): Any? = null

  abstract fun onGetName(node: T): String

  final override fun getBounds(node: T): Bounds? {
    return onGetBounds(node) ?: mSuper?.getBounds(node)
  }

  open fun onGetBounds(node: T): Bounds? = null

  /** The children this node exposes in the inspector. */
  final override fun getChildren(node: T): List<Any> {
    val builder = mutableListOf<Any>()
    onGetChildren(node, builder)

    var curDescriptor: ChainedDescriptor<T>? = mSuper
    while (curDescriptor != null) {
      curDescriptor.onGetChildren(node, builder)
      curDescriptor = curDescriptor.mSuper
    }

    return builder
  }

  // this probably should not be chained as its unlikely you would want children to come from >1
  // descriptor
  open fun onGetChildren(node: T, children: MutableList<Any>) {}

  final override fun getData(node: T): Map<SectionName, InspectableObject> {
    val builder = mutableMapOf<String, InspectableObject>()
    onGetData(node, builder)

    var curDescriptor: ChainedDescriptor<T>? = mSuper

    while (curDescriptor != null) {
      curDescriptor.onGetData(node, builder)
      curDescriptor = curDescriptor.mSuper
    }

    return builder
  }

  /**
   * Get the data to show for this node in the sidebar of the inspector. Each key will be a have its
   * own section
   */
  open fun onGetData(node: T, attributeSections: MutableMap<SectionName, InspectableObject>) {}

  /** Get a snapshot of the node. */
  final override fun getSnapshot(node: T, bitmap: Bitmap?): Bitmap? {
    return onGetSnapshot(node, bitmap) ?: mSuper?.onGetSnapshot(node, bitmap)
  }

  open fun onGetSnapshot(node: T, bitmap: Bitmap?): Bitmap? {
    return null
  }
}