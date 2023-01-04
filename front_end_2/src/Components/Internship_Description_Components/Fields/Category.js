import { useState, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js'
import Select, { components } from 'react-select';
import search_normal from '../img/search-normal.png';
import close from '../img/close.png';

export const Category = () => {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Array of all options
  const optionList = [
    { value: "technology", label: "Technology" },
    { value: "development", label: "Development" },
  ];

  // Function triggered on selection
  const handleSelect = (data) => {
    if (selectedOptions.length === 0 || !selectedOptions.some((category) => category.value === data[0].value)) {
      setSelectedOptions(selectedOptions.concat(data));
    }
  };

  useEffect(() => {
    selectedOptions.length > 0 ? setCategoryVisible(true) : setCategoryVisible(false);
  }, [selectedOptions]);

  const removeOption = (data) => {
    setSelectedOptions(selectedOptions.filter( (category) => category.label !== data.target.textContent));
  }

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible} = useContext(NewInternshipContext)

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={search_normal} />
      </components.DropdownIndicator>
    );
  };

  const IndicatorSeparator  = props => {
    return (
      <components.IndicatorSeparator  {...props}>
        {''}
      </components.IndicatorSeparator >
    );
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: "5px 5px",
      gap: "8px",

      width: "1150px",
      height: "48px",

      background: "#F1F4F8",

      /* Field Stroke */
      border: "1px solid #CECECE",
      borderRadius: "16px",

      /* Inside auto layout */
      flex: "none",
      order: "0",
      flexGrow: "0",
    }),
    valueContainer: (base) => ({
      ...base,
      width: "681px",
      height: "28px",

      fontFamily: 'Space Grotesk',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",

      /* or 150% */
      display: "flex",
      alignItems: "center",
      letterSpacing: "0.3px",
      fontFeatureSettings: "'liga' off",

      /* Text/Text - 02 */
      color: "rgba(47, 48, 49, 0.54)",


      /* Inside auto layout */
      flex: "none",
      order: "0",
      flexGrow: "1"
    })
  };

  return (
    <Form>
      <div className="Category">
        <label>Category</label>
        <div className="CategorySearch">
          <Select
            styles={customStyles}
            options={optionList}
            components={{ DropdownIndicator, IndicatorSeparator }}
            placeholder="Search Category"
            value="Search Category"
            onChange={handleSelect}
            isSearchable={true}
            isClearable={false}
            isMulti
            ValueC
          />
          <ul className='CategorySearchResults'>
          {selectedOptions.map(category => (
              <li className='CategorySelection' onClick={removeOption} key={category.value}>
                <div className='CategorySelectionText'>{category.label}</div>
                <img className='CategorySelectionX' src={close}/>
              </li>
            ))}
        </ul>
        </div>
      </div>
    </Form>
    );
  }