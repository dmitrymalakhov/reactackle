import React from 'react';
import {
  IconFontAwesome,
} from 'reactackle';
import {
  RouteDemo,
} from '../../components/Route/RouteStructure';
import {
  TestBox,
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';

import Snippet0 from './snippets/0.snippet';
import Snippet1 from './snippets/1.snippet';
import Snippet2 from './snippets/2.snippet';
import Snippet3 from './snippets/3.snippet';
import Snippet4 from './snippets/4.snippet';

export const IconFontAwesomeDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="IconFontAwesome Source">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding flex title="Font-awesome Default Icon">
            <IconFontAwesome />
          </TestBox>
          <TestBox padding flex title="Custom IconFontAwesomes">
            <IconFontAwesome name="android" />
          </TestBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet0}
      />
    </DemoSnippet>

    <DemoSnippet title="Bordered IconFontAwesome">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding flex title="Bordered IconFontAwesomes">
            <IconFontAwesome name="android" border />
          </TestBox>
          <TestBox padding flex title="Rounded IconFontAwesomes">
            <IconFontAwesome name="android" border rounded />
          </TestBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet1}
      />
    </DemoSnippet>

    <DemoSnippet title="Different Sizes">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding flex title="Default">
            <IconFontAwesome name="android" border rounded />
          </TestBox>
          <TestBox padding flex title="Small">
            <IconFontAwesome name="android" border rounded size="small" />
          </TestBox>
          <TestBox padding flex title="Normal">
            <IconFontAwesome name="android" border rounded size="normal" />
          </TestBox>
          <TestBox padding flex title="Large">
            <IconFontAwesome name="android" border rounded size="large" />
          </TestBox>
          <TestBox padding flex title="Normal 2x">
            <IconFontAwesome
              name="android"
              border
              rounded
              size="normal"
              sizeMultiplier={2}
            />
          </TestBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>

    <DemoSnippet title="Coloring">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding flex title="Light" bgColor="#999">
            <IconFontAwesome name="android" border rounded colorScheme="light" />
          </TestBox>
          <TestBox padding flex title="dark">
            <IconFontAwesome name="android" border rounded colorScheme="dark" />
          </TestBox>
          <TestBox padding flex title="custom color">
            <IconFontAwesome name="android" border rounded color="palevioletred" />
          </TestBox>

          <TestBox padding flex title="with bg">
            <IconFontAwesome
              name="android"
              rounded
              color="palevioletred"
              backgroundColor="#ddd"
            />
          </TestBox>

        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet3}
      />
    </DemoSnippet>

    <DemoSnippet title="Transformations">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding flex title="Normal">
            <IconFontAwesome name="bomb" border rounded />
          </TestBox>
          <TestBox padding flex title="Flip X">
            <IconFontAwesome name="bomb" border rounded flip="horizontal" />
          </TestBox>
          <TestBox padding flex title="Flip Y">
            <IconFontAwesome name="bomb" border rounded flip="vertical" />
          </TestBox>
          <TestBox padding flex title="Rotate 45deg">
            <IconFontAwesome name="bomb" border rounded rotate={45} />
          </TestBox>
          <TestBox padding flex title="Spin">
            <IconFontAwesome name="bomb" border rounded spin />
          </TestBox>
          <TestBox padding flex title="Pulse">
            <IconFontAwesome name="bomb" border rounded pulse />
          </TestBox>

        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet4}
      />
    </DemoSnippet>

  </RouteDemo>
);

IconFontAwesomeDemoRoute.displayName = 'IconFontAwesomeDemoRoute';
