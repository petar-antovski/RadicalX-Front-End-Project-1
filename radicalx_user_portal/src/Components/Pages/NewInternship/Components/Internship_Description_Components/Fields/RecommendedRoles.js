import { useState, useContext } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js'
import Select, { components, DropdownIndicatorProps } from 'react-select';
import search_normal from '../img/search-normal.png';

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
    setSelectedOptions(data);
  };

  const handleTick = () => {
    selectedOptions.length > 0 ? setRecommendedRolesVisible(true) : setRecommendedRolesVisible(false);
    console.log(selectedOptions);
  };

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible} = useContext(NewInternshipContext)

  const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={search_normal} />
      </components.DropdownIndicator>
    );
  };

  return (
    <Form>
      <div className="RecommendedRoles">
        <label>RecommendedRoles</label>
        <div className="dropdown-container">
          <Select
            options={optionList}
            components={{ DropdownIndicator }}
            placeholder="Search Roles"
            value={selectedOptions}
            onChange={handleSelect}
            onBlur={handleTick}
            isSearchable={true}
            isClearable={false}
            isMulti
            ValueC
          />
        </div>
        <ul>
          {selectedOptions.map(roles => (
              <li key={roles.value}>{roles.label}</li>
            ))}
        </ul>
      </div>
    </Form>
    );
  }