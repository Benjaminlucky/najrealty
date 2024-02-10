import React from 'react'
import './service.css'
import landsales from './../../images/landSales.jpg'
import apartment from './../../images/apartmentSale.jpg'
import facilityMgt from './../../images/facilityMgt.jpg'
import buildingConstruction from './../../images/buildingConstruction.jpg'
import { BiSolidChevronRight } from 'react-icons/bi';

function Service() {
  return (
    <div className="service__wrapper">
      <div className="serviceContent">
        {/*service title starts here */}
        <div className="section__title">
          <h2>Our <span>Services</span></h2>
          <div className="underline"></div>

        </div>
        {/* services starts here  */}
          <div className="servicesItems">
            <div className="serviceItem">
              <div className="itemLeft">
                <img src={landsales} alt="land sales" />
              </div>
              <div className="itemRight">
                <div className="itemTitle">
                  <h6>Sales of Land / Site and Service</h6>
                </div>
                <div className="itemdesc">
                  <p>Discover the perfect piece of land or site for your dream project with our extensive inventory. </p>
                </div>
                <div className="itemButton">
                  <a href="#" className='itemLink'>Learn More
                    <BiSolidChevronRight className='icon' />
                  </a>
                </div>
              </div>
            </div>
            <div className="serviceItem">
              <div className="itemLeft">
                <img src={apartment} alt="land sales" />
              </div>
              <div className="itemRight">
                <div className="itemTitle">
                  <h6>Sales of Buildings / Apartments</h6>
                </div>
                <div className="itemdesc">
                  <p>Explore our portfolio of meticulously designed and well-constructed buildings and apartments.</p>
                </div>
                <div className="itemButton">
                  <a href="#" className='itemLink'>Learn More
                    <BiSolidChevronRight className='icon' />
                  </a>
                </div>
              </div>
            </div>
            <div className="serviceItem">
              <div className="itemLeft">
                <img src={facilityMgt} alt="Facility management" />
              </div>
              <div className="itemRight">
                <div className="itemTitle">
                  <h6>Facility Management</h6>
                </div>
                <div className="itemdesc">
                  <p>Trust us to maintain and optimize your property's functionality.</p>
                </div>
                <div className="itemButton">
                  <a href="#" className='itemLink'>Learn More
                    <BiSolidChevronRight className='icon' />
                  </a>
                </div>
              </div>
            </div>
            <div className="serviceItem">
              <div className="itemLeft">
                <img src={buildingConstruction} alt="building construction" />
              </div>
              <div className="itemRight">
                <div className="itemTitle">
                  <h6>Building Construction</h6>
                </div>
                <div className="itemdesc">
                  <p>With a team of experienced professionals, we deliver top-notch building construction services.</p>
                </div>
                <div className="itemButton">
                  <a href="#" className='itemLink'>Learn More
                    <BiSolidChevronRight className='icon' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        {/* services ends here */}
      </div>
    </div>
  )
}

export default Service