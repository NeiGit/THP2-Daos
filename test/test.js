import DaoFactory from '../src/dao/daoFactory.js'


// Definimos los daos. El test no sabe si va a ser de DB o Caché
const commercesDao = DaoFactory.getCommercesDao()
const customersDao = DaoFactory.getCustomersDao()

// Testing getAll()
async function testGetAllCommerces() {
  console.log("TEST: getting all commerces")
  const allCommerces = await commercesDao.getAll()
  console.log(allCommerces)
}

async function testGetAllCustomers() {
  console.log("TEST: getting all customers")
  const allCustomers = await customersDao.getAll()
  console.log(allCustomers)
}

// Testing getByName()
async function testGetCommerceByName(name) {
  console.log("TEST: getting commerces by name")
  const commerces = await commercesDao.getByName(name)
  console.log(commerces)
}

async function testGetCustomerByName(name) {
  console.log("TEST: getting customers by name")
  const customers = await customersDao.getByName(name)
  console.log(customers)
}

// Testing getByCode()
async function testGetCommerceByCuit(cuit) {
  console.log("TEST: getting commerce by CUIT")
  const commerce = await commercesDao.getByCuit(cuit)
  console.log(commerce)
}

async function testGetCustomerByCuil(cuil) {
  console.log("TEST: getting customer by CUIL")
  const customer = await customersDao.getByCuil(cuil)
  console.log(customer)
}


// testGetAllCommerces()
// testGetAllCustomers()

// testGetCommerceByName('Comercio3')
// testGetCustomerByName('ic')

// testGetCommerceByCuit('18328749343')
// testGetCustomerByCuil('20336758100')