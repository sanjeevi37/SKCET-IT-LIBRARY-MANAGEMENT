import React , {useState} from 'react'
import Forms from './Forms'
import './stylesmain.css' 
import Dashboard from './Dashboard';
import IssueBook from './IssueBook';
import Addbook from './Addbook';
import Category from './Category';
import Author from './Author';
import Rack from './Rack';
import Book from './Book';
const Mainpage = () => {
    const [page,setPage] = useState(<Dashboard />)
    
    const rey = "Hii";
  return (
    <div>
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            
            <a class="navbar-brand ps-3" href="index.php">Library System</a>
            
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><svg class="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></button>
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                
            </form>
            
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><svg class="svg-inline--fa fa-user fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="profile.php">Profile</a></li>
                        <li><a class="dropdown-item" href="setting.php">Setting</a></li>
                        <li><a class="dropdown-item" href="logout.php">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div class="sb-sidenav-menu">
                            <div class="nav">
                                <a class="nav-link" style={{cursor:'pointer'}} onClick={() =>setPage(<Category />)}>Category</a>
                                <a class="nav-link" style={{cursor:'pointer'}} onClick={() =>setPage(<Author />)}>Author</a>
                                <a class="nav-link" style={{cursor:'pointer'}} onClick={() =>setPage(<Rack />)}>Location Rack</a>
                                <a class="nav-link" style={{cursor:'pointer'}} onClick={() =>setPage(<Book setPage={setPage} />)}>Book</a>
                                <a class="nav-link" style={{cursor:'pointer'}} onClick={() =>setPage(<Addbook setPage={setPage}/>)}>Add a new Book</a>
                                <a class="nav-link" style={{cursor:'pointer'}} onClick={() =>setPage(<IssueBook />)}>Issue Book</a>
                                <a class="nav-link" href="logout.php">Logout</a>
    
                            </div>
                        </div>
                        <div class="sb-sidenav-footer">
                           
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
    <main>	
        <div class="container-fluid py-4">
       
       {page}
        </div>
    
    </main>
                    <footer class="py-4 bg-light mt-auto">
                        <div class="container-fluid px-4">
                            <div class="d-flex align-items-center justify-content-between small">
                                <div class="text-muted">Copyright © Library Management System 2022</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    
                                    <a href="#">Terms Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
    </div>
  )
}

export default Mainpage