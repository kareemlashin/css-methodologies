import styled from 'styled-components';

const BlueTitle = styled.h1`
    color: #222;
    font-family: Helvetica, 'sans-serif';
    text-shadow: 0 0 5px lightgray;
    line-height: 2;

    a {
        transition: color 0.2s ease;
        color: palevioletred;
        text-decoration: none;

        &:hover {
            color: #888;
        }
    }
`;

export function StyledComponentsDemo() {
    return (
        <BlueTitle>
            Hello from{' '}
            <a href="https://github.com/styled-components/styled-components">
                styled-components
            </a>
            !
        </BlueTitle>
    );
}
export default function App() {
    return (
      <section
        style={{
          fontFamily: '-apple-system',
          fontSize: "1rem",
          fontWeight: 1.5,
          lineHeight: 1.5,
          color: "#292b2c",
          backgroundColor: "#fff",
          padding: "0 2em"
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "950px",
            margin: "0 auto",
            border: "1px solid #e6e6e6",
            padding: "40px 25px",
            marginTop: "50px"
          }}
        >
          <img
            src="https://randomuser.me/api/portraits/women/48.jpg"
            alt="Tammy Stevens"
            style={{
              margin: "-90px auto 30px",
              width: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "0"
            }}
          />
          <div>
            <p
              style={{
                lineHeight: 1.5,
                fontWeight: 300,
                marginBottom: "25px",
                fontSize: "1.375rem"
              }}
            >
              This is one of the best developer blogs on the planet! I read it daily to improve my skills.
            </p>
          </div>
          <p
            style={{
              marginBottom: "0",
              fontWeight: 600,
              fontSize: "1rem"
            }}
          >
            Tammy Stevens
            <span style={{ fontWeight: 400 }}> · Front End Developer</span>
          </p>
        </div>
      </section>
    );
  }

// colors.ts
export const colors = {
  primary: "#0d6efd",
  border: "#ddd",
};

// MyComponent.tsx
function MyComponent({ fontSize }) {
  return (
    <div css={{ padding: "0.5rem", border: "1px solid #ddd" }}>
      <p
        css={{
          color: colors.primary,
          fontSize,
          border: `1px solid ${colors.border}`,
        }}
      >
        ...
      </p>
    </div>
  );
}
function ErrorMessage({ children }) {
    return (
      <div
        css={{
          color: 'red',
          fontWeight: 'bold',
        }}
      >
        {children}
      </div>
    );
  }
  
  // styled-components or @emotion/styled, with string styles
  const ErrorMessage = styled.div`
    color: red;
    font-weight: bold;
  `;