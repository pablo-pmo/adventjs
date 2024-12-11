function decodeFilename(filename: string): string {
  return filename.replace(/\d+_([a-zA-z0-9\-_]+)(\.\w+).*/, "$1$2");
}
