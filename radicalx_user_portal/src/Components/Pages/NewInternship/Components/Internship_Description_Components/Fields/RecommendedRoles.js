import { useState, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js'
import Select, { components } from 'react-select';
import search_normal from '../img/search-normal.png';
import close from '../img/close.png';

export const RecommendedRoles = () => {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Array of all options
  const optionList = [
    { value: "frontend developer", label: "Frontend Developer" },
    { value: "backend developer", label: "Backend Developer" },
    { value: "fullstack developer", label: "Fullstack Developer" }
  ];

  // Function triggered on selection
  const handleSelect = (data) => {
    if (selectedOptions.length === 0 || !selectedOptions.some((roles) => roles.value === data[0].value)) {
      setSelectedOptions(selectedOptions.concat(data));
    }
  };

  useEffect(() => {
    selectedOptions.length > 0 ? setRecommendedRolesVisible(true) : setRecommendedRolesVisible(false);
  }, [selectedOptions]);

  const removeOption = (data) => {
    setSelectedOptions(selectedOptions.filter( (roles) => roles.label !== data.target.textContent));
  }

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible} = useContext(NewInternshipContext)

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={search_normal} />
      </components.DropdownIndicator>
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
    }),
    indicatorSeparator: (base) => ({
      ...base,
      background: "#F1F4F8"
    })
  };

  return (
    <Form>
      <div className="RecommendedRoles">
        <label>Recommended Roles</label>
        <div className="RecommendedRolesSearch">
          <Select
            styles={customStyles}
            options={optionList}
            components={{ DropdownIndicator }}
            placeholder="Search Roles"
            value="Search Roles"
            onChange={handleSelect}
            isSearchable={true}
            isClearable={false}
            isMulti
          />
          <ul className='RecommendedRolesSearchResults'>
          {selectedOptions.map(category => (
              <li className='RecommendedRolesSelection' onClick={removeOption} key={category.value}>
                <div className='RecommendedRolesSelectionText'>{category.label}</div>
                <img className='RecommendedRolesSelectionX' src={close}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Form>
    );
  }