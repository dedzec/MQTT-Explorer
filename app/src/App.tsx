import * as React from 'react'
import * as q from '../../backend/src/Model'

import { Tree } from './components/Tree/Tree'
import TitleBar from './components/TitleBar'
import Sidebar from './components/Sidebar/Sidebar'

import { withTheme, Theme } from '@material-ui/core/styles'

class State {
  public selectedNode?: q.TreeNode | undefined
}

interface Props {
  name: string
  theme: Theme
}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectedNode: undefined,
    }
  }

  private getStyles(): {[s: string]: React.CSSProperties} {
    const { theme } = this.props
    return {
      left: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        height: 'calc(100vh - 64px)',
        float: 'left',
        width: '60vw',
        overflowY: 'scroll',
        overflowX: 'hidden',
        display: 'block',
      },
      right: {
        height: 'calc(100vh - 64px)',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        float: 'right', width: '40vw',
        overflowY: 'scroll',
        overflowX: 'hidden',
        display: 'block',
      },
    }
  }

  public render() {
    return <div>
      <TitleBar />
      <div>
          <div style={this.getStyles().left}>
            <Tree didSelectNode={(node: q.TreeNode) => {
              this.setState({ selectedNode: node })
            }} />
          </div>
          <div style={this.getStyles().right}>
            <Sidebar node={this.state.selectedNode} />
          </div>
      </div>
    </div >
  }
}

export default withTheme()(App)