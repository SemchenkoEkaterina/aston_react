import React from 'react'
import { Link } from 'react-router-dom'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Что-то пошло не так.</p>
          <Link to={`/`}>
            <button>Вернуться на главную</button>
          </Link>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
