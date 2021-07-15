import Noty from 'noty'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  Noty.overrideDefaults({
    layout: 'topRight',
    theme: 'sunset',
    closeWith: ['click', 'button'],
    timeout: 2000,
  })
}
