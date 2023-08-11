using ATM_BS.API.Data;
using ATM_BS.API.Entities;

namespace ATM_BS.API.Service
{
    public class TransactionService : ITransactionService
    {
        private readonly ATMBSDbContext _dbcontext;

        public TransactionService(ATMBSDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public void AddTransaction(Transaction transaction)
        {
            _dbcontext.Transactions.Add(transaction);
            _dbcontext.SaveChanges();
        }


        public List<Transaction> GetTransactions()
        {
            return _dbcontext.Transactions.ToList();
        }

        public Transaction GetTransaction(long AccountNumber)
        {
            Transaction transaction = _dbcontext.Transactions.Find(AccountNumber);
            return transaction;
        }
    }
}
