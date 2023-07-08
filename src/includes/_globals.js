import upperFirst from 'lodash/upperCase'
import camelCase from 'lodash/camelCase'

export default {
  install(app) {
    const baseComponents = import.meta.glob('../components/base/*.vue', {
      eager: true
    })

    Object.entries(baseComponents).forEach(([path, module]) => {
      const componentName = upperFirst(
        camelCase(
          path
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
      )

      console.log(path, componentName)

      app.component(`Base${componentName}`, module.default)
    })
  }
}
