import React from 'react';
import './style.css'; // Make sure this path is correct

const Home = () => {
  return (
    <>
      <div className="container">
        <div className='row text-center mt-5'>
          <div className='col-6 d-flex align-items-start'>
            <div className='cols text-left'>
              <p>THIS IS ME</p>
              <h2>SHAMBHU PANDEY</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore veniam iusto, nesciunt deserunt quo.</p>
            </div>
          </div>
          <div className='col-6'>
            <img src="../src/Images/hero.svg" alt="hero" style={{ height: '200px', width: '200px' }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
