import { Stack } from '@chakra-ui/react'
import { textFeatures } from '../constants/text'
import Card from './card'

function Features() {
  return (
    <Stack
      width="90%"
      justify="center"
      alignItems="stretch"
      direction={['column', 'column', 'row', 'row']}
      spacing="24px"
      py="10"
    >
      {textFeatures.map((item) => (
        <Card title={item.title} text={item.text} key={item.id} />
      ))}
    </Stack>
  )
}

export default Features
