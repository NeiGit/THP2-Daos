import CustomersDaoCache from './implementations/cacheDaos/customersDaoCache.js'
import CustomersDaoDB from './implementations/dbDaos/customersDaoDb.js'
import CommercesDaoCache from './implementations/cacheDaos/commercesDaoCache.js'
import CommercesDaoDB from './implementations/dbDaos/commercesDaoDb.js'
import Config from '../../config.js'


class DaoFactory {
    static getCustomersDao() {
        switch (Config.mode) {
            case 'db': return new CustomersDaoDB()
            case 'cache': return new CustomersDaoCache()
            default: throw Error (500, 'Invalid dao mode')
        }
    }
    static getCommercesDao() {
      switch (Config.mode) {
          case 'db': return new CommercesDaoDB()
          case 'cache': return new CommercesDaoCache()
          default: throw Error (500, 'Invalid dao mode')
        }
    }
}

export default DaoFactory
