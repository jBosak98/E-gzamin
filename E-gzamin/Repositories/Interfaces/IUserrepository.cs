﻿using E_gzamin.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace E_gzamin.Repositories.Interfaces {
    public interface IUserRepository {
        public Task<List<User>> GetUsers();
        public Task<User> GetUserById(int id);
        public Task<User> GetUserByEmail(string email);
        public Task<User> ChangeUserName(int id, string new_name);
        public Task<User> AddUser(User user);
        public Task<string> Login(User user, string password);
    }
}
