import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'

export const Productivity = () => {

    let green = "https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg"
    let pink = "https://github.githubassets.com/assets/git-branch-collaboration-2-e46b1fb1d363.svg"

    return (
        <Box>
            <Image src="green" alt="green"/>
            <Text>Accelerate innovation</Text>
            <Text>Our AI-powered platform increases the pace of software development.</Text>
            

            <Box>
                <Image src="https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png" alt="code"/>
                <Image src="https://github.githubassets.com/assets/illu-copilot-sidebar-3d2efb504577.png" alt="code"/>
            </Box>

            <Text>GitHub Copilot</Text>
            <Text>empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.</Text>

            <Text>Explore GitHub Copilot</Text>
        </Box>
    )
}
