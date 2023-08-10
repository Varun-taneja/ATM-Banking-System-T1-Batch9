using ATM_BS.API.Models;
using Microsoft.EntityFrameworkCore;

namespace ATM_BS.API.Data
{
    public class ATMBSDbContext : DbContext
    {
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Customer> Customers { get; set; }
    }
}
