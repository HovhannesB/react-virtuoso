export function skipFrames(frameCount: number, callback: () => void) {
  if (frameCount == 0) {
    callback()
  } else {
    skipFrames(frameCount - 1, callback)
  }
}
