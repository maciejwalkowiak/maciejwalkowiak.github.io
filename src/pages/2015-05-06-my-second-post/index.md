---
title: Mocking Fluent APIs with Mockito
date: "2015-05-06T23:46:37.121Z"
path: "/my-second-post/"
---

Wow! I love blogging so much already.

Did you know that "despite its name, salted duck eggs can also be made from chicken eggs, though the taste and texture will be somewhat different, and the egg yolk will be less rich."? ([Wikipedia Link](http://en.wikipedia.org/wiki/Salted_duck_egg))

Yeah, I didn't either.

```java
@Service
public class InterestService {
    private final UserDataRepository repository;
    private final CategoryService categoryService;

    @Autowired
    public InterestService(@NonNull UserDataRepository repository,
                           @NonNull CategoryService categoryService) {
        this.repository = repository;
        this.categoryService = categoryService;
    }

    @Retryable(maxAttempts = 5)
    public List<Category> saveUserInterests(String userId, List<Category> categories) {
        saveInDynamo(userId, categories);
        return categories;
    }
}
```
