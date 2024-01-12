// src/components/SideNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
  const subjects = [
    {
      "category": "Popular Subjects",
      "subjects": [
        "Business",
        "History",
        "Computers",
        "Religion",
        "Health & Fitness",
        "Science",
        "Body Mind Spirit"
      ]
    },
    {
      "category": "Fiction",
      "subjects": [
        "General Fiction",
        "Children's & Young Adult",
        "Crime Fiction",
        "Fantasy",
        "Literary Fiction",
        "Romance",
        "Science Fiction",
        "Suspense/Thrillers"
      ]
    },
    {
        "category": "Non-Fiction",
        "subjects": [
          "Archaeology",
          "Architecture",
          "Art",
          "Biography & Autobiography",
          "Business & Economics",
          "Crafts & Hobbies",
          "Current Events",
          "Drama",
          "Education",
          "The Environment",
          "Family & Relationships",
          "Folklore & Mythology",
          "Food and Wine",
          "Foreign Language Books",
          "Foreign Language Study",
          "Games",
          "Gardening",
          "Health & Fitness",
          "House & Home",
          "Humor",
          "Juvenile Nonfiction",
          "Language Arts",
          "Law",
          "Literary Collections",
          "Literary Criticism",
          "Mathematics",
          "Media",
          "Medicine",
          "Music",
          "Nature",
          "Performing Arts",
          "Pets",
          "Philosophy",
          "Photography",
          "Poetry",
          "Political Science",
          "Psychology & Psychiatry",
          "Reference",
          "Religion",
          "Science",
          "Self-Help",
          "Sex",
          "Social Science",
          "Sports & Recreation",
          "Study Aids",
          "Technology",
          "Transportation",
          "Travel",
          "True Crime"
        ]
      }
    // Add more categories and subjects as needed
  ];
  

  return (
<div className="bg-gray-800 text-white w-1/6 p-4 border  border-black mt-20">

      <ul>
        {subjects.map((category, index) => (
            <li key={index} className="mb-2">
              <h2 className="text-xl font-bold mb-4 border-b-2 border-white"> {category.category}</h2>
              <ul>
              {
                category.subjects.map((subject,index)=>(
                    <li key={index}>  <Link to={`/subjects/${subject.toLowerCase()}`} className="text-sm hover:text-gray-500">
                    {subject}
                  </Link></li>
                ))
              }
               </ul>
         
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
