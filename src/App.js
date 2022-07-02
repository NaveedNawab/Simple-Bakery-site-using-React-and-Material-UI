import { Container} from '@mui/material';
import NavBar from './components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroSection from './components/HeroSection';
import CakeSection from './components/CakeSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container>
        <HeroSection />
        <CakeSection />
        <ContactUs />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
