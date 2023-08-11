using ATM_BS.API.Data;
using ATM_BS.API.Service;
using ATM_BS.API.Services;
using Microsoft.EntityFrameworkCore;

namespace ATM_BS.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var connection = builder.Configuration.GetConnectionString("ATMConnection");
            // Add services to the container.
            builder.Services.AddDbContext<ATMBSDbContext>(options => options.UseSqlServer(connection));
            builder.Services.AddTransient<IAdminService, AdminService>();
            builder.Services.AddTransient<ICustomerService, CustomerService>();
            builder.Services.AddTransient<ITransactionService, TransactionService>();
            builder.Services.AddTransient<IBalanceService, BalanceService>();

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}