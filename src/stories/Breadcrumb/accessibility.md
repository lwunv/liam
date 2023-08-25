# Breadcrumb | Accessibility ♿️

### Description
A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application. Breadcrumbs are often placed horizontally before a page's main content.

#### Components
`@chakra-ui/vue` exports 4 Breadcrumb related components:
- `BreadcrumbSeparator`
- `BreadcrumbLink`
- `BreadcrumbItem`
- `Breadcrumb`

### `Breadcrumb` Keyboard Interaction
- Not applicable


### `Breadcrumb` WAI-ARIA Roles, States, and Properties:
- [x] `Breadcrumb` trail is contained within a navigation landmark region.
- [x] The `Breadcrumb` The landmark region is labelled via `aria-label`.
- [x] The link to the current page has `aria-current` set to page. If the element representing the current page is not a link, `aria-current` is optional. This is determined by setting the `isCurrentPage` boolean prop to the `BreadcrumbLink` component
