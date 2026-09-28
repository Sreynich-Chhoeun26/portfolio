import React from 'react';
import {
  Users,
  Target,
  HeartHandshake,
  FileText,
  Languages,
  Network,
  Sparkles,
  Database,
  Code2
} from 'lucide-react';

export const TechIcon = ({ name, size = 24 }) => {
  const normalized = name.toLowerCase().trim();

  // HTML / HTML5
  if (normalized.includes('html')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M3 2L5 20.25L12 22.25L19 20.25L21 2H3Z" fill="#E44D26" />
        <path d="M12 3.65V20.55L17.5 19L19.1 4H12V3.65Z" fill="#F16529" />
        <path d="M7.7 6.8H16.3L16.1 8.8H9.9L10.1 11H15.9L15.6 14.5L12 15.5L8.4 14.5L8.2 12.5H6.2L6.6 16.5L12 18L17.4 16.5L18.1 9.8L18.3 6.8H7.7V6.8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // React / React.js
  if (normalized.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2.5 7.5V16.5L12 22L21.5 16.5V7.5L12 2Z" fill="#339933" />
        <path d="M12 3.8L4.2 8.3V15.7L12 20.2L19.8 15.7V8.3L12 3.8Z" fill="#026E00" />
        <path d="M12 6.5L6.5 9.7V14.3L12 17.5L17.5 14.3V9.7L12 6.5Z" fill="#339933" />
        <path d="M11 9H13V15H11V9Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // CSS / CSS3
  if (normalized === 'css' || normalized.includes('css3')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M3 2L5 20.25L12 22.25L19 20.25L21 2H3Z" fill="#1572B6" />
        <path d="M12 3.65V20.55L17.5 19L19.1 4H12V3.65Z" fill="#33A9DC" />
        <path d="M16.1 6.8H7.9L8.1 8.8H15.9L15.6 11.8H10.1L10.3 13.8H15.4L15 16.8L12 17.6L9 16.8L8.8 14.8H6.8L7.2 18.8L12 20.2L16.8 18.8L17.6 6.8H16.1Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes('next')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#000000" stroke="#333333" strokeWidth="1" />
        <path d="M15.8 17.2L9.2 8.5V17.2H7.2V6.8H9.3L15.9 15.5V6.8H17.8V17.2H15.8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
      </svg>
    );
  }

  // JavaScript / JS
  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M6.5 17.8C7 18.5 7.7 19 8.6 19C9.6 19 10.2 18.4 10.2 17.5V11H12.4V17.5C12.4 19.7 11 21 8.7 21C7 21 5.8 20.1 5.1 18.8L6.5 17.8ZM14.8 17.8C15.4 18.6 16.3 19 17.3 19C18.3 19 19 18.5 19 17.7C19 16.8 18.3 16.5 17.1 16C15.3 15.3 14.2 14.5 14.2 12.8C14.2 11 15.6 9.8 17.6 9.8C19.1 9.8 20.2 10.3 20.9 11.5L19.4 12.6C19 11.9 18.4 11.6 17.6 11.6C16.8 11.6 16.3 12 16.3 12.6C16.3 13.3 16.8 13.5 18 14C19.9 14.8 21.1 15.6 21.1 17.4C21.1 19.4 19.5 20.8 17.2 20.8C15.3 20.8 14 20.1 13.3 18.7L14.8 17.8Z" fill="#000000" />
      </svg>
    );
  }

  // TypeScript / TS
  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M5.5 8.5H11.5V10.5H9.5V18.5H7.5V10.5H5.5V8.5ZM13.8 16C14.4 16.6 15.3 17 16.3 17C17.4 17 18 16.5 18 15.7C18 14.9 17.3 14.6 16.1 14.1C14.4 13.4 13.3 12.7 13.3 11.1C13.3 9.4 14.7 8.2 16.7 8.2C18.1 8.2 19.2 8.7 19.9 9.6L18.5 11C18 10.4 17.4 10.2 16.7 10.2C15.9 10.2 15.4 10.6 15.4 11.1C15.4 11.7 15.8 12 17 12.5C18.9 13.2 20.1 13.9 20.1 15.6C20.1 17.4 18.6 18.7 16.3 18.7C14.6 18.7 13.4 18.1 12.6 17.1L13.8 16Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Git / GitHub
  if (normalized.includes('git')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M22.5 11.2L12.8 1.5C12.2 0.9 11.2 0.9 10.6 1.5L8.7 3.4L11.2 5.9C11.8 5.7 12.5 5.9 13 6.4C13.5 6.9 13.7 7.6 13.5 8.2L16 10.7C16.6 10.5 17.3 10.7 17.8 11.2C18.5 11.9 18.5 13.1 17.8 13.8C17.1 14.5 15.9 14.5 15.2 13.8C14.7 13.3 14.5 12.6 14.7 12L12.4 9.7V15.5C12.6 15.7 12.8 16 12.9 16.3C13.4 17.4 12.9 18.7 11.8 19.2C10.7 19.7 9.4 19.2 8.9 18.1C8.4 17 8.9 15.7 10 15.2C10.4 15 10.8 15 11.2 15.1V9.4C10.8 9.3 10.4 9.1 10.1 8.8C9.5 8.2 9.4 7.3 9.7 6.6L7.3 4.2L1.5 10C0.9 10.6 0.9 11.6 1.5 12.2L11.2 21.9C11.8 22.5 12.8 22.5 13.4 21.9L22.5 12.8C23.1 12.2 23.1 11.8 22.5 11.2Z" fill="#F05032" />
      </svg>
    );
  }

  // Bootstrap
  if (normalized.includes('bootstrap')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#7952B3" />
        <path d="M8 6H13.2C15.3 6 16.7 7.1 16.7 8.8C16.7 10 16 10.9 14.9 11.3V11.4C16.3 11.8 17.2 12.9 17.2 14.4C17.2 16.3 15.6 17.5 13.2 17.5H8V6ZM10.4 10.8H12.8C13.8 10.8 14.4 10.2 14.4 9.3C14.4 8.4 13.8 7.9 12.7 7.9H10.4V10.8ZM10.4 15.6H13C14.1 15.6 14.8 15 14.8 14C14.8 13.1 14.1 12.5 12.9 12.5H10.4V15.6Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // PHP
  if (normalized === 'php' || normalized.includes('php')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
        <path d="M5.5 9.5H8C9.2 9.5 9.9 10.1 9.9 11.1C9.9 12.1 9.1 12.7 8 12.7H6.7V14.5H5.5V9.5ZM6.7 11.7H7.9C8.4 11.7 8.7 11.5 8.7 11.1C8.7 10.7 8.4 10.5 7.9 10.5H6.7V11.7ZM10.8 9.5H12V11.2H14.2V9.5H15.4V14.5H14.2V12.2H12V14.5H10.8V9.5ZM16.3 9.5H18.8C20 9.5 20.7 10.1 20.7 11.1C20.7 12.1 19.9 12.7 18.8 12.7H17.5V14.5H16.3V9.5ZM17.5 11.7H18.7C19.2 11.7 19.5 11.5 19.5 11.1C19.5 10.7 19.2 10.5 18.7 10.5H17.5V11.7Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Laravel
  if (normalized.includes('laravel')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M8.5 2.5L2 6.2V17.8L8.5 21.5L15 17.8V13.7L10.8 11.3V8.3L15 10.7V6.2L8.5 2.5ZM8.5 4.8L13 7.4L8.5 10L4 7.4L8.5 4.8ZM3.5 16.8V8.9L8 11.5V19.4L3.5 16.8ZM18.5 12.6L14 10V14.2L18.5 16.8V12.6ZM14 15.2L18.5 12.6L23 15.2L18.5 17.8L14 15.2Z" fill="#FF2D20" />
      </svg>
    );
  }

  // MySQL
  if (normalized.includes('mysql')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00618A" />
        <path d="M4 17.5C6 11 11.5 7.5 18 8.5C14.5 9 12.5 11 11.5 14C11 15.5 10.5 16.5 9 17C7.5 17.5 5.5 17.5 4 17.5Z" fill="#F29111" />
        <path d="M12 9C15 8 18.5 9.5 20 12C18.5 12.5 17 12 16 11.5C14.5 10.8 13.5 10 12 9Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // SQL Server / Database
  if (normalized.includes('sql server') || normalized.includes('database')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#CC292B" />
        <path d="M12 4C7.58 4 4 5.34 4 7V17C4 18.66 7.58 20 12 20C16.42 20 20 18.66 20 17V7C20 5.34 16.42 4 12 4ZM12 6C15.31 6 18 6.9 18 7C18 7.1 15.31 8 12 8C8.69 8 6 7.1 6 7C6 6.9 8.69 6 12 6ZM18 11.2C16.64 12.08 14.47 12.5 12 12.5C9.53 12.5 7.36 12.08 6 11.2V9.32C7.45 10.22 9.61 10.7 12 10.7C14.39 10.7 16.55 10.22 18 9.32V11.2ZM18 15.2C16.64 16.08 14.47 16.5 12 16.5C9.53 16.5 7.36 16.08 6 15.2V13.32C7.45 14.22 9.61 14.7 12 14.7C14.39 14.7 16.55 14.22 18 13.32V15.2Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // C#
  if (normalized === 'c#' || normalized.includes('c#')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#68217A" />
        <path d="M11 7C8.2 7 6 9.2 6 12C6 14.8 8.2 17 11 17C12.4 17 13.6 16.4 14.4 15.4L13 14C12.5 14.6 11.8 15 11 15C9.3 15 8 13.7 8 12C8 10.3 9.3 9 11 9C11.8 9 12.5 9.4 13 10L14.4 8.6C13.6 7.6 12.4 7 11 7ZM15.5 10V11.2H16.7V10H17.7V11.2H18.5V12.2H17.7V13.2H18.5V14.2H17.7V15.5H16.7V14.2H15.5V15.5H14.5V14.2H13.7V13.2H14.5V12.2H13.7V11.2H14.5V10H15.5ZM15.5 12.2V13.2H16.7V12.2H15.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // C++
  if (normalized.includes('c++')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00599C" />
        <path d="M9 7C6.8 7 5 8.8 5 11C5 13.2 6.8 15 9 15C10.2 15 11.2 14.5 11.8 13.7L10.5 12.5C10.1 13 9.6 13.3 9 13.3C7.7 13.3 6.7 12.3 6.7 11C6.7 9.7 7.7 8.7 9 8.7C9.6 8.7 10.1 9 10.5 9.5L11.8 8.3C11.2 7.5 10.2 7 9 7ZM13 10V11H14V10H15V11H16V12H15V13H14V12H13V13H12V12H11V11H12V10H13ZM17 10V11H18V10H19V11H20V12H19V13H18V12H17V13H16V12H15V11H16V10H17Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // C Language
  if (normalized === 'c' || normalized.includes('c language')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00599C" />
        <path d="M14 7.5C13.2 7.2 12.4 7 11.5 7C7.9 7 5 9.2 5 12C5 14.8 7.9 17 11.5 17C12.4 17 13.2 16.8 14 16.5L13.2 14.2C12.7 14.4 12.1 14.5 11.5 14.5C9.3 14.5 7.5 13.4 7.5 12C7.5 10.6 9.3 9.5 11.5 9.5C12.1 9.5 12.7 9.6 13.2 9.8L14 7.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Python
  if (normalized.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M11.91 2C6.96 2 7.27 4.14 7.27 4.14L7.28 6.36H12.06V7.07H5.34C5.34 7.07 2 6.7 2 11.64C2 16.58 4.93 16.36 4.93 16.36H6.67V13.88C6.67 11.03 9.07 11.08 9.07 11.08H13.81C16.33 11.08 16.59 8.7 16.59 8.7V4.28C16.59 4.28 16.89 2 11.91 2ZM9.32 3.44C9.88 3.44 10.33 3.89 10.33 4.45C10.33 5.01 9.88 5.46 9.32 5.46C8.76 5.46 8.31 5.01 8.31 4.45C8.31 3.89 8.76 3.44 9.32 3.44Z" fill="#3776AB" />
        <path d="M12.09 22C17.04 22 16.73 19.86 16.73 19.86L16.72 17.64H11.94V16.93H18.66C18.66 16.93 22 17.3 22 12.36C22 7.42 19.07 7.64 19.07 7.64H17.33V10.12C17.33 12.97 14.93 12.92 14.93 12.92H10.19C7.67 12.92 7.41 15.3 7.41 15.3V19.72C7.41 19.72 7.11 22 12.09 22ZM14.68 20.56C14.12 20.56 13.67 20.11 13.67 19.55C13.67 18.99 14.12 18.54 14.68 18.54C15.24 18.54 15.69 18.99 15.69 19.55C15.69 20.11 15.24 20.56 14.68 20.56Z" fill="#FFD43B" />
      </svg>
    );
  }

  // Figma
  if (normalized.includes('figma')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M8 2H12V7.33H8C6.53 7.33 5.33 6.13 5.33 4.67C5.33 3.2 6.53 2 8 2Z" fill="#F24E1E" />
        <path d="M12 2H16C17.47 2 18.67 3.2 18.67 4.67C18.67 6.13 17.47 7.33 16 7.33H12V2Z" fill="#FF7262" />
        <path d="M8 7.33H12V12.67H8C6.53 12.67 5.33 11.47 5.33 10C5.33 8.53 6.53 7.33 8 7.33Z" fill="#A259FF" />
        <path d="M12 7.33H16C17.47 7.33 18.67 8.53 18.67 10C18.67 11.47 17.47 12.67 16 12.67C14.53 12.67 13.33 11.47 13.33 10V7.33H12Z" fill="#1ABCFE" />
        <path d="M8 12.67H12V18C12 19.47 10.8 20.67 9.33 20.67C7.87 20.67 6.67 19.47 6.67 18C6.67 16.53 7.87 15.33 9.33 15.33H8V12.67Z" fill="#0ACF83" />
      </svg>
    );
  }

  // REST APIs
  if (normalized.includes('api')) {
    return (
      <div style={{
        width: size,
        height: size,
        borderRadius: '4px',
        background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF'
      }}>
        <Network size={size * 0.75} strokeWidth={2.2} />
      </div>
    );
  }

  // Personal / Soft skills fallback icons
  if (normalized.includes('communication')) {
    return <Users size={size} color="#8B5CF6" />;
  }
  if (normalized.includes('problem')) {
    return <Target size={size} color="#EC4899" />;
  }
  if (normalized.includes('teamwork') || normalized.includes('adaptability')) {
    return <HeartHandshake size={size} color="#F59E0B" />;
  }
  if (normalized.includes('office') || normalized.includes('word') || normalized.includes('excel')) {
    return <FileText size={size} color="#10B981" />;
  }
  if (normalized.includes('khmer') || normalized.includes('english') || normalized.includes('language')) {
    return <Languages size={size} color="#06B6D4" />;
  }

  // Generic fallback
  return <Code2 size={size} color="#8B5CF6" />;
};

export default TechIcon;
