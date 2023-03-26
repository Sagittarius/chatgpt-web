import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
  donate: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://im.geekcloud.cf/file/2dae46a6efce9da2a3a94.jpg',
      name: 'Vincent',
      description: '给颗小星星<a href="https://github.com/Sagittarius/chatgpt-web" class="text-blue-500" target="_blank" >Github</a>',
      donate: '<a href="https://im.geekcloud.cf/file/5754f9b0c322b29005b8f.jpg" class="text-blue-500" target="_blank" >喜欢的话捐助一下吧</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
