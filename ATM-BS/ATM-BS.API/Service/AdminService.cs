using ATM_BS.API.Data;
using ATM_BS.API.Entities;

namespace ATM_BS.API.Service
{
    public class AdminService : IAdminService
    {
        private readonly ATMBSDbContext _dbcontext;

        public AdminService(ATMBSDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public void AddAdmin(Admin admin)
        {
            _dbcontext.Admins.Add(admin); //save records to the Admins table
            _dbcontext.SaveChanges();
        }
    }
}