/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.facebook.flipper.plugins.uidebugger.descriptors

import android.os.Build
import android.widget.TextView
import com.facebook.flipper.plugins.uidebugger.common.Inspectable
import com.facebook.flipper.plugins.uidebugger.common.InspectableObject
import com.facebook.flipper.plugins.uidebugger.common.InspectableValue

object TextViewDescriptor : ChainedDescriptor<TextView>() {

  override fun onGetName(node: TextView): String = node.javaClass.simpleName

  override fun onGetData(
      node: TextView,
      attributeSections: MutableMap<SectionName, InspectableObject>
  ) {
    val typeface = node.typeface

    val props =
        mutableMapOf<String, Inspectable>(
            "text" to InspectableValue.Text(node.text.toString(), false),
            "textSize" to InspectableValue.Number(node.textSize, false),
            "textColor" to InspectableValue.Color(node.getTextColors().getDefaultColor(), false))

    val typeFace =
        mutableMapOf<String, InspectableValue>(
            "isBold" to InspectableValue.Boolean(typeface.isBold, false),
            "isItalic" to InspectableValue.Boolean(typeface.isItalic, false),
        )

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
      typeFace["weight"] = InspectableValue.Number(typeface.weight, false)
    }

    props["typeface"] = InspectableObject(typeFace)

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
      props["minLines"] = InspectableValue.Number(node.minLines, false)
      props["maxLines"] = InspectableValue.Number(node.maxLines, false)
      props["minWidth"] = InspectableValue.Number(node.minWidth, false)
      props["maxWidth"] = InspectableValue.Number(node.maxWidth, false)
    }

    attributeSections.put("TextView", InspectableObject(props))
  }
}