import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Service">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/enroll">Enroll Course</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;