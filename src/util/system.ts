export function isWindows() {
    return process.platform === "win32";
}

export function getSlash() {
    return process.platform === "win32" ? "\\" : "/";
}
