# Artefact 20 — API Naming Convention (blank)

> Kích hoạt: Day 60-70 (Phase 4). Điền xong trước Gate 4.
> Owner: Dev Lead + PM. Approver: Brand Guardian.

---

## A. Thông tin

- Brand: _______________________
- API version hiện tại: _______________________
- Base URL: _______________________
- Ngày lock: ____ / ____ / ________

## B. Endpoint Naming

### B.1 Pattern

```
[HTTP_METHOD] /v{version}/{resource}/{id?}/{action?}
```

### B.2 Rules

- [ ] Dùng kebab-case cho multi-word resources: `/user-profiles` không phải `/userProfiles`.
- [ ] Dùng nouns, không dùng verbs trong URL: `POST /users` không phải `POST /createUser`.
- [ ] Dùng plural nouns cho collections: `/users` không phải `/user`.
- [ ] Consistent pagination: `?page=` và `?limit=` hoặc `?cursor=`.
- [ ] Consistent error format: `{ "error": { "code": "...", "message": "..." } }`.

## C. Resource Registry

| Resource | Path | Methods | Description |
|----------|------|---------|-------------|
| Users | /v2/users | GET, POST, PATCH, DELETE | User accounts |
| | /v2/users/{id} | GET, PATCH, DELETE | Single user |
| | /v2/users/{id}/settings | GET, PATCH | User settings |
| <<...>> | <<...>> | <<...>> | <<...>> |

## D. SDK / Client Library Naming

| Language | Package name | Install command | Class/Client name |
|----------|--------------|-----------------|-------------------|
| JavaScript (npm) | `<<...>>` | `npm install <<...>>` | `<<PascalCase>>Client` |
| Python (PyPI) | `<<...>>` | `pip install <<...>>` | `<<PascalCase>>Client` |
| Go | `<<...>>` | `go get <<...>>` | `<<PascalCase>>Client` |
| Ruby | `<<...>>` | `gem install <<...>>` | `<<PascalCase>>::Client` |

## E. Function / Method Naming

| Operation | SDK Method | Parameters | Return type |
|-----------|------------|------------|-------------|
| Create user | `users.create()` | `{ name, email }` | `User` |
| Get user | `users.get(id)` | `id: string` | `User` |
| Update user | `users.update(id, data)` | `id: string, data: Partial<User>` | `User` |
| List users | `users.list({ page, limit })` | `options?: ListOptions` | `PaginatedResult<User>` |
| Delete user | `users.delete(id)` | `id: string` | `void` |

## F. Error Codes

| Code | HTTP | SDK Error Class | Message template | User-facing message (VI) | User-facing message (EN) |
|------|------|-----------------|------------------|------------------------|--------------------------|
| 400 | 400 | `BadRequestError` | `Invalid {{field}}` | | |
| 401 | 401 | `UnauthorizedError` | `Authentication required` | | |
| 403 | 403 | `ForbiddenError` | `Permission denied` | | |
| 404 | 404 | `NotFoundError` | `{{resource}} not found` | | |
| 422 | 422 | `ValidationError` | `{{field}} is invalid` | | |
| 429 | 429 | `RateLimitError` | `Too many requests` | | |
| 500 | 500 | `InternalError` | `Internal server error` | | |

## G. Environment Variables

| Var | Description | Example |
|-----|-------------|---------|
| `<<BRAND>>_API_KEY` | API key | `<<BRAND>>_API_KEY=sk_live_...` |
| `<<BRAND>>_API_BASE_URL` | Base URL | `https://api.<<brand>>.com/v2` |
| `<<BRAND>>_TIMEOUT` | Request timeout (ms) | `30000` |

---

**Ký Dev Lead:** __________     **Ngày:** ____ / ____ / ________
**Ký PM:** __________     **Ngày:** ____ / ____ / ________
**Ký Brand Guardian:** __________     **Ngày:** ____ / ____ / ________
