import development from './development.config'
import staging from './staging.config'
import production from './production.config'

const configs = {
  development,
  staging,
  production,
}

const environment = process.env.REACT_APP_STAGE

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return configs[environment] || configs['development']
}
