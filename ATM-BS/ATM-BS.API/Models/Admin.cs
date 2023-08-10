namespace ATM_BS.API.Models
{
    public class Admin
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long Contact { get; set; }
        public string Password { get; set; }
    }
}
