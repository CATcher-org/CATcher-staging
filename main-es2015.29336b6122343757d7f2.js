    fragment issueAuthor on Actor {
  login
  url
  avatarUrl
}
    `,bx=fx.a`
    fragment issue on Issue {
  id
  number
  title
  body
  state
  createdAt
  updatedAt
  url
  author {
    ...issueAuthor
  }
}
    ${yx}`,vx=fx.a`
    fragment issueLabel on Label {
  id
  color
  name
  url
}
    `,wx=fx.a`
    fragment issueAssignee on User {
  id
  login
  url
}
    `,kx=fx.a`
    fragment issueComment on IssueComment {
  id
  databaseId
  body
  createdAt
  updatedAt
}
    `,xx=(fx.a`
    fragment issueModel on Issue {
  ...issue
  labels(first: 100) {
    edges {
      node {
        ...issueLabel
      }
    }
  }
  assignees(first: 100) {
    edges {
      node {
        ...issueAssignee
      }
    }
  }
  comments(first: 100) {
    edges {
      cursor
      node {
        ...issueComment
      }
    }
  }
}
    ${bx}
${vx}
${wx}
${kx}`,fx.a`
    query FetchIssue($owner: String!, $name: String!, $issueId: Int!, $commentCursor: String) {
  repository(owner: $owner, name: $name) {
    issue(number: $issueId) {
      ...issue
      labels(first: 100) {
        edges {
          node {
            ...issueLabel
          }
        }
      }
      assignees(first: 100) {
        edges {
          node {
            ...issueAssignee
          }
        }
      }
      comments(first: 100, after: $commentCursor) {
        edges {
          cursor
          node {
            ...issueComment
          }
        }
      }
    }
  }
}
    ${bx}
${vx}
${wx}
${kx}`),Sx=fx.a`
    query FetchIssuesByTeam($owner: String!, $name: String!, $tutorial: String!, $filter: IssueFilters, $cursor: String, $commentCursor: String) {
  repository(owner: $owner, name: $name) {
    label(name: $tutorial) {
      issues(first: 100, filterBy: $filter, after: $cursor) {
        edges {
          cursor
          node {
            ...issue
            labels(first: 100) {
              edges {
                node {
                  ...issueLabel
                }
              }
            }
            assignees(first: 100) {
              edges {
                node {
                  ...issueAssignee
                }
              }
            }
            comments(first: 100, after: $commentCursor) {
              edges {
                cursor
                node {
                  ...issueComment
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${bx}
${vx}
${wx}
${kx}`,Ex=fx.a`
    query FetchIssues($owner: String!, $name: String!, $filter: IssueFilters, $cursor: String, $commentCursor: String) {
  repository(owner: $owner, name: $name) {
    issues(first: 100, filterBy: $filter, after: $cursor) {
      edges {
        cursor
        node {
          ...issue
          labels(first: 100) {
            edges {
              node {
                ...issueLabel
              }
            }
          }
          assignees(first: 100) {
            edges {
              node {
                ...issueAssignee
              }
            }
          }
          comments(first: 100, after: $commentCursor) {
            edges {
              cursor
              node {
                ...issueComment
              }
            }
          }
        }
      }
    }
  }
}
    ${bx}
${vx}
${wx}
${kx}`,Dx=fx.a`
    query FetchLabels($owner: String!, $name: String!, $cursor: String) {
  repository(owner: $owner, name: $name) {
    labels(first: 100, after: $cursor) {
      edges {
        cursor
        node {
          ...issueLabel
          description
        }
      }
    }
  }
}