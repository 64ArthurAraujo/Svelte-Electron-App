export const appData = process.env.APPDATA || (
  process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' :
    process.env.HOME + "/.local/share"
)

export const system = process.platform;
