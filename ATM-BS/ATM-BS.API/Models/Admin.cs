namespace ATM_BS.API.Models
{
    public class Admin
    {
        public Guid EmployeeId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int Contact { get; set; }
        public string Password { get; set; }
    }
}
