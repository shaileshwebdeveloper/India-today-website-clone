import { Button, useColorMode } from "@chakra-ui/react"


export default function DarkMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>
         {colorMode === 'light' ? 'DARK' : 'LIGHT'}
        </Button>
      </header>
    )
  }