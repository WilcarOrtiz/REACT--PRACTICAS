import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'

function App() {
  const {
    loading,
    fromLanguage,
    toLanguage,
    interChangeLanguages,
    setFromLanguage,
    setToLanguage,
    fromText,
    setFromText,
    result,
    setToResult,
  } = useStore()

  return (
    <Container fluid>
      <h1>Google Traslate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.from}
              value={fromLanguage}
              onChange={setFromLanguage}
            />

            <TextArea
              type={SectionType.from}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs="auto">
          <Button
            variant="light"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interChangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.to}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              loading={loading}
              type={SectionType.to}
              value={result}
              onChange={setToResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
