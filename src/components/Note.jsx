import { Card, CardBody, CardFooter, CardHeader, Divider, Heading, Text } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export default function Note ({title, description, createdAt}) {
return ( <Card variant={"filled"}>
            <CardHeader>
              <Heading size={"md"}>{title}</Heading>
            </CardHeader>
            <Divider borderColor={"gray"}></Divider>
            <CardBody><Text>{description}</Text></CardBody>
            <Divider borderColor={"gray"}></Divider>
            <CardFooter>
               {createdAt}
            </CardFooter>
          </Card>);

}