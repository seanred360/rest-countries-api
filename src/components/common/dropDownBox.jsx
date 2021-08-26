import React from "react";
import { FiChevronDown } from "react-icons/fi";

const DropDownBox = ({
  dropdownTitle,
  sortCategory,
  dropdownItems,
  onItemSelect,
}) => {
  return (
    <div className="dropdown">
      <button className="dropdown-toggle flex flex-jc-sb flex-ai-c">
        {dropdownTitle}
        <FiChevronDown className="chevron-icon" />
      </button>
      <ul className="dropdown-menu">
        {dropdownItems.map((item) => (
          <li key={item}>
            <button
              className="dropdown-item"
              onClick={() => onItemSelect(sortCategory, item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownBox;

// class DropDownBox extends Component {
//   render() {
//     return (
//       <div className="dropdown">
//         <button className="dropdown-toggle">
//           Filter by Region
//           <FiChevronDown className="chevron-icon" />
//         </button>
//         <ul className="dropdown-menu">

//           <li>
//             <button className="dropdown-item">Africa</button>
//           </li>
//           <li>
//             <button className="dropdown-item">America</button>
//           </li>
//           <li>
//             <button className="dropdown-item">Asia</button>
//           </li>
//           <li>
//             <button className="dropdown-item">Europe</button>
//           </li>
//           <li>
//             <button className="dropdown-item">Oceania</button>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default DropDownBox;
