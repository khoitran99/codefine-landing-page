import '@testing-library/jest-dom/vitest'

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null
  readonly rootMargin = ''
  readonly scrollMargin = ''
  readonly thresholds: readonly number[] = []

  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
  unobserve() {}
}

class MockResizeObserver implements ResizeObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
}

window.IntersectionObserver = MockIntersectionObserver
window.ResizeObserver = MockResizeObserver
