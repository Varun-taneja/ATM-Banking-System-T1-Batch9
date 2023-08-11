namespace ATM_BS.API.Models
{
    public class Customer
    {
        public Guid CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string AccountType { get; set; }
        public string Address { get; set; }
        public int Pincode { get; set; }
        public string Email { get; set; }
        public int Contact { get; set; }

        public long AccountNumber { get; set; }
    }
}
