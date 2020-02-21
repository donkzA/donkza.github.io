---
layout: default
title: SEO Tools
---
<div class="container">
    <h1>Meta Tag Character Counter</h1>
    <div class="meta-tag-container">
        <section id="title-section" class="section-tag">
            <h2>Title Tag</h2>
            <div class="section-container">
                <div class="card" style="max-width: 50rem;">
                    <div class="card-header text-white bg-dark">Preview Title Tag</div>
                    <div class="card-body">
                        <div class="title-tag-container ">
                            <form class="title-tag-form">
                                <div class="input-group mb-3">
                                    <input id="title-tag" type="text" class="form-control" placeholder="Title" aria-label="Title" aria-describedby="title-button">
                                    <div class="input-group-append">
                                        <span id="title-counter" class="input-group-text">0</span>
                                        <button class="btn btn-primary" type="button" id="title-button">Check</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="tag-result-container">
                            <div class="title-tag-result">This the where the title tag character will display</div>
                            <div class="title-tag-url">https://your-domain.com/your-post-url</div>
                            <div class="title-tag-description text-black">The recommended title tag is up to 60 characters. Most search engine like Google uses this limit.</div>
                        </div>
                    </div>
                </div>
                <div class="analysis-container">
                    <div id="title-tag-analysis"></div>
                </div>
            </div>
        </section>
        <section id="meta-description-section" class="section-tag">
            <h2>Meta Description Tag</h2>
            <div class="section-container">
                <div class="card" style="max-width: 50rem;">
                    <div class="card-header text-white bg-info">Preview Meta Description Tag</div>
                    <div class="card-body">
                        <div class="meta-description-tag-container ">
                            <form class="meta-desc-tag-form">
                                <div class="input-group mb-3">
                                    <input id="meta-description-tag" type="text" class="form-control" placeholder="Description" aria-label="Description" aria-describedby="meta-description-button">
                                    <div class="input-group-append">
                                        <span id="meta-description-counter" class="input-group-text">0</span>
                                        <button class="btn btn-primary" type="button" id="meta-description-button">Check</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="tag-result-container">
                            <div class="meta-description-title">This the where the title tag character will display</div>
                            <div class="meta-description-url">https://your-domain.com/your-post-url</div>
                            <div class="meta-description-result text-black">The recommended meta description from Google is up to 160 character</div>
                        </div>
                    </div>
                </div>
                <div class="analysis-container">
                    <div id="meta-description-analysis"></div>
                </div>
            </div>
        </section>
        <section id="text-counter-section" class="section-tag">
            <h2>Text Character Counter</h2>
            <div class="section-container">
                <div class="card" style="max-width: 50rem;">
                    <div class="card-header text-white bg-secondary">Enter Any Text To Count</div>
                    <div class="card-body">
                        <div class="text-counter-container ">
                            <form class="text-counter-form">
                                <div class="input-group mb-3">
                                    <textarea id="text-counter" class="form-control" rows="10" placeholder="Counts any text character."></textarea>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button" id="text-counter-button">0</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="tag-result-container">
                            <div class="text-counter-result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>