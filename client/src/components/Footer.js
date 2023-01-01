import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='p-4'>
        <div className='footer-row'>
          <div className='footer-column'>
            <h5 className='text-uppercase'>Footer Content</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
              atque cumque eum delectus sint!
            </p>
          </div>

          <div className='footer-column'>
            <h5 className='text-uppercase'>Useful Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-column'>
            <h5 className='text-uppercase mb-0'>Follow Dexter</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        The Bonnie Dexter &copy; {new Date().getFullYear()} Copyright:{' '} All Rights Reserved
        <a className='text-white' href='https://github.com/bonfacemasira/'>
        https://github.com/bonfacemasira
        </a>
      </div>
    </footer>
  );
}

export default Footer;