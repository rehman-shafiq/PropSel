import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Enter an address, neighborhood, city, or ZIP code'
}) => {
  
  /* States */
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

 /* Hooks */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="position-relative" ref={wrapperRef}>
      <div
        className="d-flex align-items-center bg-white rounded-pill shadow-sm btn-success"
        style={{
          border: focused ? '2px solid #007bff' : '2px solid transparent',
          boxShadow: focused ? '0 0 8px rgba(0,123,255,0.4)' : 'none'
        }}
      >
        <input
          type="text"
          className="form-control border-0 rounded-pill p-3 flex-grow-1 "
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            /* keep dropdown open until outside click; blur alone will not close */
          }}
          style={{
            borderRadius: '50px',
            outline: 'none',
            boxShadow: 'none',
          }}
        />
        <Search className="me-3 text-muted" />
      </div>

      {focused && (
        <ul
          className="list-group position-absolute mt-1"
          style={{
            width: '100%',
            top: '100%',
            left: 0,
            zIndex: 1000
          }}
        >
          <li
            className="list-group-item list-group-item-action d-flex align-items-center"
            onClick={() => {
              /* placeholder action */
              setFocused(false);
            }}
          >
            <MapPin className="me-2 text-primary" />
            Current Location
          </li>
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
