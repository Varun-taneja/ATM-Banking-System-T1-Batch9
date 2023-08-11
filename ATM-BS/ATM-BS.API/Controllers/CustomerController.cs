using ATM_BS.API.DTOS;
using ATM_BS.API.Entities;
using ATM_BS.API.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ATM_BS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService customerService;

        public CustomerController(ICustomerService customerService)
        {
            this.customerService = customerService; 
        }

        [HttpPost,Route("AddCustomer")]
        public IActionResult Add(CustomerDTO customerDTO)
        {
            try
            {
                Customer customer = new Customer()
                {
                    CustomerId = customerDTO.CustomerID,
                    CustomerName = customerDTO.CustomerName,
                    AccountType = customerDTO.AccountType,
                    AccountNumber = customerDTO.AccountNumber,
                    Address = customerDTO.Address,
                    Pincode = customerDTO.Pincode,
                    Email = customerDTO.Email,
                    Contact = customerDTO.Contact,
                };
                customerService.AddCustomer(customer);
                return StatusCode(200, customerDTO);

            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
