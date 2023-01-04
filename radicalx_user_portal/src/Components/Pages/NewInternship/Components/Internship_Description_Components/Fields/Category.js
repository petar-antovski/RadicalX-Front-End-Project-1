import { useState, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js'
import Select, { components, DropdownIndicatorProps } from 'react-select';
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

  return (
    <Form>
      <div className="Category">
        <label>Category</label>
        <div className="dropdown-container">
          <Select
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
        </div>
        <ul>
          {selectedOptions.map(category => (
              <li onClick={removeOption} key={category.value}>{category.label}</li>
            ))}
        </ul>
      </div>
    </Form>
    );
  }