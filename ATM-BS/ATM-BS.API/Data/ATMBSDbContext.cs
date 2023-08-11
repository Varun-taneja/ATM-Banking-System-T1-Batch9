using ATM_BS.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace ATM_BS.API.Data
{
    public class ATMBSDbContext : DbContext
    {
        //public ATMBSDbContex(DbContextOptions<ATMBSDbContex> options) : base(options)
        //{

        //}

        public DbSet<Admin> Admins { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Balance> Balances { get; set; }

        public DbSet<Transaction> Transactions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=WINDOWS-BVQNF6J;Initial Catalog=master;Persist Security Info=True;User ID=sa;Password=12345;TrustServerCertificate=True;");
        }
    }
}