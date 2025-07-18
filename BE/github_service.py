import faker

author_list = [
    {"name": faker.Faker().name(), "email": faker.Faker().email()} for _ in range(5)
]


class GithubService:
    def __init__(self):
        self.base_url = "https://api.github.com/graphql"
        self.token = "TEST_VALUE"
        self.headers = {
            "Authorization": f"Bearer {self.token}",
        }

    def fetch_authors_stub(self):
        return [
            {"name": faker.Faker().name(), "email": faker.Faker().email()}
            for _ in range(5)
        ]

    def fetch_outliers_sub(self):
        return [
            {
                "sha": faker.Faker().pystr(16),
                "message": faker.Faker().sentence(),
                "additions": faker.Faker().pyint(min_value=1000, max_value=5000),
                "deletions": faker.Faker().pyint(min_value=100, max_value=1000),
                "deviation_score": faker.Faker().pyfloat(
                    min_value=2.0, max_value=4.99, right_digits=2
                ),
                "author": {
                    "name": author_list[x]["name"],
                    "email": author_list[x]["email"],
                },
            }
            for x in range(5)
        ]

    def fetch_authors(self, start_date, end_date):
        pass
