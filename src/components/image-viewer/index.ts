import './image-viewer.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { ImageViewer, MultiImageViewer } from './image-viewer'
import {
  showMultiImageViewer,
  showImageViewer,
  clearImageViewer,
} from './methods'

export type { ImageViewerProps, MultiImageViewerProps } from './image-viewer'

const Multi = attachPropertiesToComponent(MultiImageViewer, {
  show: showMultiImageViewer,
})

export default attachPropertiesToComponent(ImageViewer, {
  Multi,
  show: showImageViewer,
  clear: clearImageViewer,
})
