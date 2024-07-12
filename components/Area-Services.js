import React from 'react';

const serviceAreas = [
    {
        state: 'Massachusetts',
        cities: [
          'Abington', 'Acton', 'Acushnet', 'Adams', 'Agawam', 'Alford', 'Amesbury', 
          'Amherst', 'Andover', 'Aquinnah', 'Arlington', 'Ashburnham', 'Ashby', 
          'Ashfield', 'Ashland', 'Athol', 'Attleboro', 'Auburn', 'Avon', 'Ayer', 
          'Barnstable', 'Barre', 'Becket', 'Bedford', 'Belchertown', 'Bellingham', 
          'Belmont', 'Berkley', 'Berlin', 'Bernardston', 'Beverly', 'Billerica', 
          'Blackstone', 'Blandford', 'Bolton', 'Boston', 'Bourne', 'Boxborough', 
          'Boxford', 'Boylston', 'Braintree', 'Brewster', 'Bridgewater', 'Brimfield', 
          'Brockton', 'Brookfield', 'Brookline', 'Buckland', 'Burlington', 'Cambridge', 
          'Canton', 'Carlisle', 'Carver', 'Charlemont', 'Charlton', 'Chatham', 
          'Chelmsford', 'Chelsea', 'Cheshire', 'Chester', 'Chesterfield', 'Chicopee', 
          'Chilmark', 'Clarksburg', 'Clinton', 'Cohasset', 'Colrain', 'Concord', 
          'Conway', 'Cummington', 'Dalton', 'Danvers', 'Dartmouth', 'Dedham', 'Deerfield', 
          'Dennis', 'Dighton', 'Douglas', 'Dover', 'Dracut', 'Dudley', 'Dunstable', 
          'Duxbury', 'East Bridgewater', 'East Brookfield', 'East Longmeadow', 
          'Eastham', 'Easthampton', 'Easton', 'Edgartown', 'Egremont', 'Erving', 
          'Essex', 'Everett', 'Fairhaven', 'Fall River', 'Falmouth', 'Fitchburg', 
          'Florida', 'Foxborough', 'Framingham', 'Franklin', 'Freetown', 'Gardner', 
          'Georgetown', 'Gill', 'Gloucester', 'Goshen', 'Gosnold', 'Grafton', 'Granby', 
          'Granville', 'Great Barrington', 'Greenfield', 'Groton', 'Groveland', 
          'Hadley', 'Halifax', 'Hamilton', 'Hampden', 'Hancock', 'Hanover', 'Hanson', 
          'Hardwick', 'Harvard', 'Harwich', 'Hatfield', 'Haverhill', 'Hawley', 
          'Heath', 'Hingham', 'Hinsdale', 'Holbrook', 'Holden', 'Holland', 'Holliston', 
          'Holyoke', 'Hopedale', 'Hopkinton', 'Hubbardston', 'Hudson', 'Hull', 
          'Huntington', 'Ipswich', 'Kingston', 'Lakeville', 'Lancaster', 'Lanesborough', 
          'Lawrence', 'Lee', 'Leicester', 'Lenox', 'Leominster', 'Leverett', 'Lexington', 
          'Leyden', 'Lincoln', 'Littleton', 'Longmeadow', 'Lowell', 'Ludlow', 'Lunenburg', 
          'Lynn', 'Lynnfield', 'Malden', 'Manchester-by-the-Sea', 'Mansfield', 'Marblehead', 
          'Marion', 'Marlborough', 'Marshfield', 'Mashpee', 'Mattapoisett', 'Maynard', 
          'Medfield', 'Medford', 'Medway', 'Melrose', 'Mendon', 'Merrimac', 'Methuen', 
          'Middleborough', 'Middlefield', 'Middleton', 'Milford', 'Millbury', 'Millis', 
          'Millville', 'Milton', 'Monroe', 'Monson', 'Montague', 'Monterey', 'Montgomery', 
          'Mount Washington', 'Nahant', 'Nantucket', 'Natick', 'Needham', 'New Ashford', 
          'New Bedford', 'New Braintree', 'New Marlborough', 'New Salem', 'Newbury', 
          'Newburyport', 'Newton', 'Norfolk', 'North Adams', 'North Andover', 
          'North Attleborough', 'North Brookfield', 'North Reading', 'Northampton', 
          'Northborough', 'Northbridge', 'Northfield', 'Norton', 'Norwell', 'Norwood', 
          'Oak Bluffs', 'Oakham', 'Orange', 'Orleans', 'Otis', 'Oxford', 'Palmer', 
          'Paxton', 'Peabody', 'Pelham', 'Pembroke', 'Pepperell', 'Peru', 'Petersham', 
          'Phillipston', 'Pittsfield', 'Plainfield', 'Plainville', 'Plymouth', 
          'Plympton', 'Princeton', 'Provincetown', 'Quincy', 'Randolph', 'Raynham', 
          'Reading', 'Rehoboth', 'Revere', 'Richmond', 'Rochester', 'Rockland', 
          'Rockport', 'Rowe', 'Rowley', 'Royalston', 'Russell', 'Rutland', 'Salem', 
          'Salisbury', 'Sandisfield', 'Sandwich', 'Saugus', 'Savoy', 'Scituate', 
          'Seekonk', 'Sharon', 'Sheffield', 'Shelburne', 'Sherborn', 'Shirley', 
          'Shrewsbury', 'Shutesbury', 'Somerset', 'Somerville', 'South Hadley', 
          'Southampton', 'Southborough', 'Southbridge', 'Southwick', 'Spencer', 
          'Springfield', 'Sterling', 'Stockbridge', 'Stoneham', 'Stoughton', 
          'Stow', 'Sturbridge', 'Sudbury', 'Sunderland', 'Sutton', 'Swampscott', 
          'Swansea', 'Taunton', 'Templeton', 'Tewksbury', 'Tisbury', 'Tolland', 
          'Topsfield', 'Townsend', 'Truro', 'Tyngsborough', 'Tyringham', 'Upton', 
          'Uxbridge', 'Wakefield', 'Wales', 'Walpole', 'Waltham', 'Ware', 'Wareham', 
          'Warren', 'Warwick', 'Washington', 'Watertown', 'Wayland', 'Webster', 
          'Wellesley', 'Wellfleet', 'Wendell', 'Wenham', 'West Boylston', 
          'West Bridgewater', 'West Brookfield', 'West Newbury', 'West Springfield', 
          'West Stockbridge', 'West Tisbury', 'Westborough', 'Westfield', 
          'Westford', 'Westhampton', 'Westminster', 'Weston', 'Westport', 
          'Westwood', 'Weymouth', 'Whately', 'Whitman', 'Wilbraham', 'Williamsburg', 
          'Williamstown', 'Wilmington', 'Winchendon', 'Winchester', 'Windsor', 
          'Winthrop', 'Woburn', 'Worcester', 'Worthington', 'Wrentham', 'Yarmouth'
        ]
    },
    // Add more states and cities as needed
  ];

const AreaServices = () => {
  return (
    <div className="">
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
        <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-900">Areas We Service</h2>
            <p className="mt-4 text-lg leading-6 text-gray-600">We currently service the following areas in Massachusetts:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="p-6 ">
                <h3 className="text-xl font-semibold mb-4">{area.state}</h3>
                <ul className="list-disc list-inside">
                  {area.cities.map((city, cityIndex) => (
                    <li key={cityIndex}>{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaServices;
